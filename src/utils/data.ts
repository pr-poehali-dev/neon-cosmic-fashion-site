
export interface Image {
  url: string;
  title: string;
  description: string;
}

export interface VkVideo {
  ownerId: string;
  id: string;
  title: string;
}

export interface YouTubeVideo {
  id: string;
  title: string;
}

export const images: Image[] = [
  {
    url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    title: "Модельный тест",
    description: "Профессиональная фотосессия для начинающих моделей",
  },
  {
    url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    title: "Портфолио",
    description: "Создание профессионального модельного портфолио",
  },
  {
    url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    title: "Фэшн-съемка",
    description: "Креативные концепции для продвинутых моделей",
  },
  {
    url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    title: "Съемка для журнала",
    description: "Создание материалов для глянцевых изданий",
  },
  {
    url: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    title: "Коммерческая съемка",
    description: "Фотосессия для рекламы и каталогов",
  },
  {
    url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    title: "Имиджевая съемка",
    description: "Создание уникального образа для соцсетей",
  },
  {
    url: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    title: "Бьюти-съемка",
    description: "Акцент на макияж и красоту модели",
  },
  {
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
    title: "Студийная съемка",
    description: "Работа с профессиональным светом и оборудованием",
  },
];

export const youtubeVideos: YouTubeVideo[] = [
  { id: "dQw4w9WgXcQ", title: "Как подготовиться к первой фотосессии" },
  { id: "8hz7mmpYQAU", title: "Основы позирования для моделей" },
  { id: "gCwjLPCqfmU", title: "Секреты удачного портфолио" },
  { id: "jNQXAC9IVRw", title: "Тренды модельной индустрии" },
  { id: "J---aiyznGQ", title: "Как выбрать фотографа для сотрудничества" },
  { id: "QH2-TGUlwu4", title: "Лучшие техники для модельных поз" }
];

// Оставим старые данные на случай, если понадобятся позже
export const vkVideos: VkVideo[] = [
  { ownerId: "-67486235", id: "456240038", title: "Модельные тесты: как подготовиться" },
  { ownerId: "-67486235", id: "456240042", title: "Секреты профессиональной съемки" },
  { ownerId: "-67486235", id: "456240045", title: "Как стать моделью" },
  { ownerId: "-67486235", id: "456240048", title: "Советы начинающим моделям" },
  { ownerId: "-67486235", id: "456240051", title: "Модельное портфолио: что нужно знать" },
  { ownerId: "-67486235", id: "456240055", title: "Техники позирования для моделей" }
];
