import { useEffect, useState } from 'react';

export function useCanvasResize(): number {
  const [canvasHeight, setCanvasHeight] = useState(800);

  useEffect(() => {
    const handleResize = (): void => {
      const isMobileOrTablet: boolean =
        window.matchMedia('(max-width: 768px)').matches;
      if (isMobileOrTablet) {
        const screenHeight: number = window.innerHeight;
        setCanvasHeight(screenHeight / 2);
      } else {
        setCanvasHeight(800);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return canvasHeight;
}

export function useSendEmail() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function send(beautifullDickPick: string) {
    try {
      setIsLoading(true);
      const response = await fetch(
        'https://kovsky-api.vercel.app/api/drawMeSendMail',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ dickPick: beautifullDickPick }),
        }
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { data, isLoading, error, send };
}
