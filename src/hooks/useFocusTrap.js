import { useState, useEffect } from 'react';

// Focus trap from https://medium.com/@seif_ghezala/how-to-create-an-accessible-react-modal-5b87e6a27503
const useFocusTrap = (ref) => {
  const [focus, setFocus] = useState(0);
  const [focusableElements, setFocusableElements] = useState(null);

  const getKeyboardFocusableElements = (element) => {
    const filtered = [];
    const arrayElements = Array.from(element.querySelectorAll(
      'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])',
    ), (e) => e);

    arrayElements.forEach((el) => {
      if (el && !el.hasAttribute('disabled')) {
        filtered.push(el);
      }
    });
    return filtered;
  };

  const handleTabulation = (e) => {
    e.preventDefault();
    if (e.keyCode === 9 && !e.shiftKey) {
      setFocus((currentFocus) => ((currentFocus + 1) % focusableElements.length));
    }
    if (e.keyCode === 9 && e.shiftKey) {
      setFocus(
        (currentFocus) => (
          (currentFocus - 1 < 0) ? (focusableElements.length - 1) : (currentFocus - 1)
        ),
      );
    }
  };

  useEffect(() => {
    if (!focusableElements) {
      const elements = ref.current && getKeyboardFocusableElements(ref.current);
      setFocusableElements(elements);
    } else {
      focusableElements[focus].focus();
    }
  }, [focus, focusableElements, ref]);

  return handleTabulation;
};

/* @component */
export default useFocusTrap;
