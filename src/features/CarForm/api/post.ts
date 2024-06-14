import { ICar, SchemaProps } from 'types'

export async function PostCar(newCar: SchemaProps): Promise<ICar[]> {
  try {
    const res = await fetch('https://app-douglassilva-api.azurewebsites.net/api/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCar)
    });

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    return res.json();
  } catch (err) {
    throw new Error('Error fetching data');
  }
}