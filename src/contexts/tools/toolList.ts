export interface Tool {
  name: string
  classes: string
}

export const MyWorkspaceTools = [
  {
    name: 'Inicio',
    classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-synoptic-announcement',
  },
  { name: 'Calendario', classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-schedule' },
  { name: 'Anuncios', classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-announcements' },
  { name: 'Recursos', classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-resources' },
  { name: 'Perfil', classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-profile2' },
  { name: 'Pertenencia', classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-membership' },
  {
    name: 'Configuración de sitios',
    classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-sitesetup',
  },
  { name: 'Preferencias', classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-preferences' },
  {
    name: 'Cuenta de usuario',
    classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-singleuser',
  },
  {
    name: 'Guías Docentes',
    classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-umugdocenteng',
  },
  {
    name: 'Creación de sitios',
    classes: 'Mrphs-toolsNav__menuitem--link is-invisible icon-sakai--sakai-umumakesites',
  },
  {
    name: 'Atención a Usuarios',
    classes: 'Mrphs-toolsNav__menuitem--link is-invisible icon-sakai--sakai-umucau',
  },
  {
    name: 'Llamamientos',
    classes: 'Mrphs-toolsNav__menuitem--link is-invisible icon-sakai--sakai-umullamamientos',
  },
  {
    name: 'Actas',
    classes: 'Mrphs-toolsNav__menuitem--link is-invisible icon-sakai--sakai-umuactas',
  },
  {
    name: 'Mi Galería',
    classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-kaltura-my-media',
  },
  {
    name: 'Panel de analíticas',
    classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-umuanaliticas',
  },
  { name: 'Ayuda', classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--help' },
]

export const SiteTools = [
  {
    name: 'Inicio',
    classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-synoptic-announcement ',
  },
  {
    name: 'Tiene una copia',
    classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-lessonbuildertool',
  },
  {
    name: 'Contenidos Plantilla',
    classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-lessonbuildertool',
  },
  {
    name: 'Contenidos Matemáticas',
    classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-lessonbuildertool',
  },
  {
    name: 'Información del sitio',
    classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-siteinfo',
  },
  {
    name: 'Gestionar usuarios',
    classes: 'Mrphs-toolsNav__menuitem--link is-invisible icon-sakai--sakai-umuadduser',
  },
  { name: 'Calendario', classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-schedule' },
  { name: 'Anuncios', classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-announcements' },
  { name: 'Recursos', classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-resources' },
  {
    name: 'Carpeta Compartida',
    classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-iframe',
  },
  { name: 'Contenido web', classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-iframe' },
  { name: 'Tareas', classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-assignment-grades' },
  {
    name: 'Mensajes privados',
    classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-messages',
  },
  { name: 'Foros', classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-forums' },
  { name: 'Blog', classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-clog' },
  { name: 'Wiki', classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-rwiki' },
  { name: 'Chat', classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-chat' },
  { name: 'Exámenes', classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-samigo' },
  { name: 'Carpeta personal', classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-dropbox' },
  {
    name: 'Información de grupos',
    classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-sections',
  },
  { name: 'Apúntate', classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-signup' },
  {
    name: 'Videoconferencia',
    classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-videoconference-connect',
  },
  {
    name: 'Participantes',
    classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-site-roster2',
  },
  { name: 'Videoconferencia', classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-zoomlti' },
  { name: 'Videoclases', classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-opencast' },
  {
    name: 'Galeria',
    classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-kaltura-media-gallery',
  },
  {
    name: 'Rúbricas',
    classes: 'Mrphs-toolsNav__menuitem--link is-invisible icon-sakai--sakai-rubrics',
  },
  { name: 'Encuestas', classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-poll' },
  { name: 'Estadísticas', classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-sitestats' },
  {
    name: 'Calificaciones',
    classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-gradebookng',
  },
  { name: 'Anotaciones colaborativas', classes: 'Mrphs-toolsNav__menuitem--link' },
  {
    name: 'Contenidos',
    classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--sakai-lessonbuildertool',
  },
  { name: 'Ayuda', classes: 'Mrphs-toolsNav__menuitem--link icon-sakai--help' },
]

export const getRandomToolList = (numTools: number) => {
  const sortedTools = SiteTools.map((tool) => tool).sort(() => Math.random() - 0.5)
  return sortedTools.slice(0, numTools)
}
