import React, { useEffect, useRef } from "react";

export default function withAutoSave(WrappedComponent, defaultOnSave, delay = 1000) {
  return function AutoSaveWrapper(props) {
    const timeoutRef = useRef(null);

    useEffect(() => {
      if (!props.data) return;

      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        const saveFn = props.onSave || defaultOnSave;
        if (saveFn) saveFn(props.data);
      }, delay);

      return () => clearTimeout(timeoutRef.current);
    }, [props.data]);

    return <WrappedComponent {...props} />;
  };
}
