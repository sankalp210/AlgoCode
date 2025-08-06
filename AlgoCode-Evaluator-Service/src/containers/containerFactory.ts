import Docker from 'dockerode';

async function createContainer(imageName: string, cmdExecutable: string[]) {
  const docker = new Docker();

  const container = await docker.createContainer({
    Image: imageName,
    Cmd: cmdExecutable,
    Tty: false,
    HostConfig: {
      Memory: 1024 * 1024 * 1024, // 2GB
    },
    AttachStderr: true,
    AttachStdout: true,
    AttachStdin: false,
    OpenStdin: false,
  });

  return container;
}

export default createContainer;
