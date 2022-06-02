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
        console.log(res.data);
        const filteredArray = filterFamilyWithName(res.data);
        setData(filteredArray);
      } catch (e) {
        console.log(e);
        setError(e);
      }
    }

    getData();
  }, []);

  return {error, data, loading};
}

const filterFamilyWithName = array => {
  const filteredArray = [];
  array.forEach(element => {
    const familyMembers = array.filter(a => element.family === a.family);
    array.splice(
      array.findIndex(e => e.family === element.family),
      1,
    );
    filteredArray.push({
      title: `${element.family} ${familyMembers.length}`,
      data: familyMembers,
    });
  });
  return filteredArray;
};
export default useCharacterList;
