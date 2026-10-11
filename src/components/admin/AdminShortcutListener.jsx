import React, { useEffect } from 'react';
import { useAdmin } from '../../context/AdminContext';

/**
 * AdminShortcutListener
 * Global keyboard shortcut listener for secret administrator access.
 * Triggers Secret Admin Gateway Modal when Ctrl + A (or Cmd + A) is pressed.
 */
export function AdminShortcutListener() {
  const { openSecretModal } = useAdmin();

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Secret key combination: Ctrl + A or Cmd + A (and Ctrl + N as alternate)
      const isCtrlOrCmd = event.ctrlKey || event.metaKey;
      const isKeyA = event.key === 'a' || event.key === 'A' || event.code === 'KeyA';
      const isKeyN = event.key === 'n' || event.key === 'N' || event.code === 'KeyN';

      if (isCtrlOrCmd && (isKeyA || isKeyN)) {
        // Prevent default browser behavior (e.g. select all text or open new window)
        event.preventDefault();
        event.stopPropagation();
        openSecretModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => {
      window.removeEventListener('keydown', handleKeyDown, { capture: true });
    };
  }, [openSecretModal]);

  return null;
}
