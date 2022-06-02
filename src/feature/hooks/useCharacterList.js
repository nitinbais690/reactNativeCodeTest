import {useEffect, useState} from 'react';
import {fetchAllCharacter} from '../../service/characters';

function useCharacterList() {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetchAllCharacter();
        setLoading(false);
        console.log(res);
        setData(res);
      } catch (e) {
        console.log(e);
        setError(e);
      }
    }

    getData();
  }, []);

  return {error, data, loading};
}

export default useCharacterList;
