import image1 from '../assets/images/apartment.JPEG'
import image2 from '../assets/images/beachvilla.jpeg'


export const mockProperties = [
  {
    id: "1",
    title: "Cozy Downtown Apartment",
    description: "2-bedroom apartment in city center.",
    images: [image1],
    price: 1800,
  },
  {
    id: "2",
    title: "Beachside Villa",
    description: "Spacious villa by the beach.",
    images: [image2],
    price: 1950,
  },
];

export const fetchProperties = () =>
  new Promise(resolve => setTimeout(() => resolve(mockProperties), 500));

export const fetchPropertyById = id =>
  new Promise(resolve =>
    setTimeout(() => {
      const prop = mockProperties.find(p => p.id === id);
      resolve(prop);
    }, 500)
  );
