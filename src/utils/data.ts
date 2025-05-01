
export interface ModelImage {
  url: string;
  alt: string;
}


export interface VkVideo {
  id: string;
  ownerId: string;
  title: string;
}


export const modelImages: ModelImage[] = [
  { url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e", alt: "Модель в студии" },
  { url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f", alt: "Модель на фотосессии" },
  { url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1", alt: "Модель в элегантном образе" },
  { url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6", alt: "Модель в цветах" },
  { url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb", alt: "Портрет модели" },
  { url: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03", alt: "Студийная фотосессия" },
  { url: "https://images.unsplash.com/photo-1604681630705-5de61cfa895a", alt: "Модель в модном образе" },
  { url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330", alt: "Портрет девушки" },
  { url: "https://images.unsplash.com/photo-1508216404536-389532644ac5", alt: "Модель на подиуме" },
  { url: "https://images.unsplash.com/photo-1464863979621-258859e62245", alt: "Фэшн-съемка" },
  { url: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc", alt: "Профессиональная модель" },
  { url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b", alt: "Модель в платье" },
  { url: "https://images.unsplash.com/photo-1550928431-ee0ec6db30d3", alt: "Высокая мода" },
  { url: "https://images.unsplash.com/photo-1496747611176-843222e1e57c", alt: "Летняя фотосессия" },
  { url: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df", alt: "Портрет улыбающейся модели" },
];

export const youtubeVideos: YoutubeVideo[] = [
  { id: "0qisGSwZym4", title: "Модельные тесты: как подготовиться" },
  { id: "TUOgS7HC5Mo", title: "Секреты профессиональной съемки" },
  { id: "DLr69eDfBBo", title: "Как стать моделью" },
  { id: "9rR5JcI5daA", title: "Советы начинающим моделям" },
  { id: "WLLFWH84PwE", title: "Модельное портфолио: что нужно знать" },
  { id: "jPldXBxeYPY", title: "Техники позирования для моделей" },
  { id: "P13dP6JFyKA", title: "Работа с камерой: советы профессионалов" },
  { id: "O3UBOOZw-FE", title: "Индустрия моды: взгляд изнутри" },
  { id: "hYH9mJtm8fA", title: "Как сделать идеальный модельный снимок" },
  { id: "jdZ1ZYiJwOs", title: "Модельный образ: макияж и стиль" },
];

export const getRandomItems = <T>(array: T[], count: number): T[] => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
