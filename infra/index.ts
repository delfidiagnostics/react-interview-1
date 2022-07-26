import * as k8s from "@pulumi/kubernetes";
import * as pulumi from "@pulumi/pulumi";
import {RunError} from "@pulumi/pulumi";
import {aws, kubernetes} from "@delfidiagnostics/pulumi-service-infra";
import * as docker from "@pulumi/docker";


let config = new pulumi.Config();
let stack = pulumi.getStack();
const appName = config.require('APP_NAME');
const namespaceName = config.require('NAMESPACE');
const numReplicas = config.requireNumber('NUM_REPLICAS');
const containerPort = config.requireNumber('CONTAINER_PORT');
const servicePort = config.requireNumber('SERVICE_PORT');
const serviceAccountName = config.get('KUBE_SERVICE_ACCOUNT_NAME') as string;
const domainName = 'delfidx.io';
const dockerFileLocationDir = '../'
const imageTag = process.env.IMAGE_TAG as string;
if (!imageTag) {
    throw new RunError("Please specify the IMAGE_TAG environment variable");
}

const ecrUrl = `016272216798.dkr.ecr.us-west-2.amazonaws.com/lis/limon-ui:${imageTag}`;
const image = new docker.Image(`${appName}-image`, {
    imageName: ecrUrl,
    build: dockerFileLocationDir
})
const imagePath = image.baseImageName;
const infra = new pulumi.StackReference(`delfi/lis-infra/${stack}`);
const provider = new k8s.Provider("k8s", { kubeconfig: infra.getOutput("kubeConfig") });
const serviceArgs: kubernetes.ServiceArgs = {
    appName,
    stack,
    namespaceName,
    containerPort,
    servicePort
};
const deploymentArgs = {...serviceArgs, serviceAccountName,
    imagePath,
    numReplicas
};
const ingressArgs = {...serviceArgs, domainName};
kubernetes.createReactDeployment(deploymentArgs, provider);
kubernetes.createNodePortService(serviceArgs, provider);
const certificate = aws.getCertificate(stack, domainName);
const ingress = kubernetes.createIngress(ingressArgs, certificate, provider);
const ingressHostName = ingress.status.loadBalancer.ingress[0].hostname;
const route53Zone = aws.getRoute53Zone(stack, domainName);
const cname = aws.getRoute53Record(appName, stack, domainName, route53Zone, ingressHostName);
let url = cname.name.apply(v=>`https://${v}`);
// Export the image and the service URL;
export {imagePath, url};
