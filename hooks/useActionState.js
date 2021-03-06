import { useState, useCallback } from 'react';

export default function useActionState(
  action
) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const onAction = useCallback(async () => {
    setError('');
    setSuccess(false);
    setIsLoading(true);
    try {
      const res = await action();
      setIsLoading(false);
      setSuccess(true);
      setError('');
      return res;
    } catch (err) {
      setIsLoading(false);
      setError(err.toString());
    }
  }, [action, setIsLoading, setError]);

  const reset = useCallback(() => {
    setError('');
    setSuccess(false);
  }, [setError, setSuccess]);
  return [onAction, isLoading, success, error, reset];
}