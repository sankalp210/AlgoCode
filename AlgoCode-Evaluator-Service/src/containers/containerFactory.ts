import Docker from 'dockerode';

async function createContainer(imageName: string, cmdExecutable: string[]) {
  const docker = new Docker();

  const container = await docker.createContainer({
    Image: imageName,
    Cmd: cmdExecutable,
    Tty: false,
    AttachStderr: true,
    AttachStdout: true,
    AttachStdin: false,
    OpenStdin: false,
  });

  return container;
}

export default createContainer;
