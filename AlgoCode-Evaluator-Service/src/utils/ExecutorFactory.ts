import CppExecutor from '../containers/cppExecutor';
import JavaExecutor from '../containers/javaExecutor';
import PythonExecutor from '../containers/pythonExecutor';
import CodeExecutorStrategy from '../types/CodeExecutorStrategy';

export default function createExecutor(
  codeLanguage: string | undefined,
): CodeExecutorStrategy | null {
  if (!codeLanguage) return null;

  const lang = codeLanguage.toLowerCase();

  if (lang === 'python') {
    return new PythonExecutor();
  } else if (lang === 'java') {
    return new JavaExecutor();
  } else if (lang === 'cpp' || lang === 'c++') {
    return new CppExecutor();
  }

  return null; // explicitly return null for unsupported languages
}
