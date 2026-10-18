// Avatars are an icon on a muted tile. `id` is what gets stored on the profile,
// so never rename an id; add new ones at the end.
export const AVATARS = [
  { id: 'pretzel', icon: 'coffee', light: '#FDE7D3', dark: '#3D2717' },
  { id: 'code', icon: 'code', light: '#E0E7FF', dark: '#1E2440' },
  { id: 'bike', icon: 'bicycle', light: '#DCFCE7', dark: '#163222' },
  { id: 'book', icon: 'book', light: '#FEF3C7', dark: '#3A2E10' },
  { id: 'music', icon: 'music', light: '#FCE7F3', dark: '#3A1A2C' },
  { id: 'leaf', icon: 'leaf', light: '#D1FAE5', dark: '#11322A' },
  { id: 'rocket', icon: 'rocket', light: '#E0F2FE', dark: '#132D3D' },
  { id: 'football', icon: 'football', light: '#F4F4F5', dark: '#2A2A2E' },
  { id: 'paw', icon: 'paw', light: '#FFE4E6', dark: '#3D1A1F' },
  { id: 'sun', icon: 'sun', light: '#FEF9C3', dark: '#38320F' },
  { id: 'boat', icon: 'boat', light: '#CFFAFE', dark: '#0F3135' },
  { id: 'planet', icon: 'planet', light: '#EDE9FE', dark: '#2A1F44' },
];

export const getAvatar = (id) => AVATARS.find((a) => a.id === id) ?? AVATARS[0];
