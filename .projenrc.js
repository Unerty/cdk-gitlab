const { AwsCdkConstructLibrary } = require('projen');

const project = new AwsCdkConstructLibrary({
  authorAddress: "pahudnet@gmail.com",
  authorName: "Pahud Hsieh",
  cdkVersion: "1.71.0",
  name: "cdk-gitlab",
  repository: "https://github.com/pahud/cdk-gitlab.git",
  description: "High level CDK construct to provision GitLab integrations with AWS",
  defaultReleaseBranch: 'main',
  autoDetectBin: false,
  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-ec2',
    '@aws-cdk/aws-ecs',
    '@aws-cdk/aws-eks',
    '@aws-cdk/aws-iam',
  ],
  python: {
    distName: "cdk-gitlab",
    module: "cdk_gitlab",
  },
});

const common_exclude = ['cdk.out', 'cdk.context.json', 'yarn-error.log'];
project.npmignore.exclude(...common_exclude, 'bin', '.devcontainer');
project.gitignore.exclude(...common_exclude);

project.synth();
