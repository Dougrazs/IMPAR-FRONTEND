import { SchemaProps } from 'types';

export async function UpdateCar(newInfo: SchemaProps, carId: number | undefined) {
  console.log('hey: ', newInfo)
  const mergeInfo = { ...newInfo, id: carId }
  try {
    const res = await fetch(`https://app-douglassilva-api.azurewebsites.net/api/cars/${carId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mergeInfo),
    });

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
  } catch (err) {
    console.error('Error updating car:', err);
    throw new Error('Error updating car');
  }
}
