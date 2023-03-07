export const excerciseOptions = {
  method: 'GET',

  params: {muscle: 'biceps'},
  headers: {
    'X-RapidAPI-Key': 'cfabd8b0a6msh46aa3b9ec349e08p188adejsn5bb4d682e012',
    'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
  }

  };


export const fetchData = async (url,options)=>{

    const res = await fetch(url ,options);

    const data = await res.json();

    return data;
}