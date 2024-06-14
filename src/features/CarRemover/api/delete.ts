export async function DeleteCar(carId: number): Promise<void> {
  try {
    const res = await fetch(`https://app-douglassilva-api.azurewebsites.net/api/cars/${carId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
  } catch (err) {
    throw new Error('Error deleting data');
  }
}