export interface ContainerScrollTheme {
  base: string
  container: string
  header: string
  device: string
  screen: string
}

export const containerScrollTheme: ContainerScrollTheme = {
  base: 'h-[80rem] flex items-center justify-center relative p-20',
  container: 'py-10 w-full relative',
  header: 'max-w-5xl mx-auto text-center',

  device:
    'max-w-5xl -mt-10 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-secondary-700 dark:border-secondary-800 p-4 bg-secondary-900 rounded-[30px] shadow-2xl ',

  screen: 'bg-secondary-100 dark:bg-secondary-800 h-full w-full rounded-2xl gap-4 overflow-hidden p-4',
}
