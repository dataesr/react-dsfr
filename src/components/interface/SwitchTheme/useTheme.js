import { useEffect, useState, useCallback } from 'react';

const useMutationObserver = (domNodeSelector, observerOptions, cb) => {
  useEffect(() => {
    const targetNode = document.querySelector(domNodeSelector);

    const observer = new MutationObserver(cb);

    observer.observe(targetNode, observerOptions);

    return () => {
      observer.disconnect();
    };
  }, [domNodeSelector, observerOptions, cb]);
};

const options = { attributes: true };

const useTheme = () => {
  const [theme, setTheme] = useState(document.documentElement.getAttribute('data-fr-theme'));

  const handler = useCallback((mutationList) => {
    mutationList.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'data-fr-theme') {
        setTheme(document.documentElement.getAttribute('data-fr-theme'));
      }
    });
  }, []);

  useMutationObserver('html', options, handler);

  return theme;
};

export default useTheme;
