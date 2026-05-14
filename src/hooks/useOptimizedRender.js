import { useMemo, useCallback } from 'react';

/**
 * Hook untuk optimasi rendering dengan memoization
 */
export function useOptimizedRender(value, dependencies) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => value, dependencies || []);
}

/**
 * Hook untuk optimasi callback
 */
export function useOptimizedCallback(callback, dependencies) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(callback, dependencies || []);
}

export default useOptimizedRender;
