import { useState, useEffect } from 'react';
import './Quotes.css';

const Quotes = () => {
  const [quote, setQuote] = useState({});
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      try {
        const apiKey = 'e83m5BX9Ww3ih5whVCbdrbqAnJrxlEDYJZ0tAY7w';
        const category = 'success';
        const res = await fetch(
          `https://api.api-ninjas.com/v1/quotes?category=${category}`,
          {
            headers: { 'X-Api-Key': apiKey },
          },
        );
        const json = await res.json();
        console.log(json[0]);
        setQuote(json[0]);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchQuote();
  }, [setQuote, setIsLoading]);

  if (hasError) return <div className="qouteName">Something went wrong!</div>;

  if (isLoading) return <div className="qouteName">Loading...</div>;

  return (
    <div>
      {quote && (
        <p className="qouteName">
          {quote.quote}
          -
          {quote.author}
        </p>
      )}
    </div>
  );
};

export default Quotes;
