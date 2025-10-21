import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export const useIntersectionObserver = ({
  threshold = 0.1,
  root = null,
  rootMargin = '0%',
  freezeOnceVisible = false,
}: UseIntersectionObserverProps = {}) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const [node, setNode] = useState<Element | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observerInstance = new IntersectionObserver(updateEntry, observerParams);

    observer.current = observerInstance;
    observerInstance.observe(node);

    return () => observerInstance.disconnect();
  }, [node, threshold, root, rootMargin, frozen]);

  useEffect(() => {
    if (!node) return;

    const hasIOSupport = !!window.IntersectionObserver;
    if (!hasIOSupport) {
      setEntry({ isIntersecting: true } as IntersectionObserverEntry);
    }
  }, [node]);

  return [setNode, entry] as const;
};

export default useIntersectionObserver;
