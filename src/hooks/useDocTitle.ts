import { useEffect } from 'react';

export function useDocTitle(title: string) {
  useEffect(() => {
    document.title = title ? `${title} — OpenX` : 'OpenX — Powered by ShivanshAI-1.1';
  }, [title]);
}
