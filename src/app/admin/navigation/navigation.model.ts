export class NavigationModel {

  public model: any[];

  constructor() {
    this.model = [
      {
        'id': 'home',
        'title': 'Home',
        'type': 'item',
        'icon': 'home',
        'url': '/home'
      },
      {
        'id': 'ui',
        'title': 'UI',
        'type': 'collapse',
        'icon': 'bubble_chart',
        'children': [
          {
            'id': 'pagination',
            'title': 'Pagination',
            'type': 'item',
            'url': '/materials/pagination'
          },
          {
            'id': 'date-picker',
            'title': 'Date picker',
            'type': 'item',
            'url': '/materials/date-picker'
          }, {
            'id': 'modal',
            'title': 'Modal',
            'type': 'item',
            'url': '/materials/popover'
          }, {
            'id': 'buttons',
            'title': 'Buttons',
            'type': 'item',
            'url': '/materials/buttons'
          }, {
            'id': 'cards',
            'title': 'Cards',
            'type': 'item',
            'url': '/materials/cards'
          }, {
            'id': 'lists',
            'title': 'Lists',
            'type': 'item',
            'url': '/materials/lists'
          }, {
            'id': 'menu',
            'title': 'Menu',
            'type': 'item',
            'url': '/materials/menu'
          }, {
            'id': 'slider',
            'title': 'Slider',
            'type': 'item',
            'url': '/materials/slider'
          }, {
            'id': 'tabs',
            'title': 'Tabs',
            'type': 'item',
            'url': '/materials/tabs'
          }, {
            'id': 'tooltips',
            'title': 'Tooltips',
            'type': 'item',
            'url': '/materials/tooltips'
          }, {
            'id': 'dialogs',
            'title': 'Dialogs',
            'type': 'item',
            'url': '/materials/dialogs'
          }, {
            'id': 'icon',
            'title': 'Icons',
            'type': 'item',
            'url': '/materials/icon'
          }
        ]
      },
      {
        'id': 'extend',
        'title': 'Others',
        'type': 'collapse',
        'icon': 'equalizer',
        'badge': {
          'title': 'new',
          'bg': '#3F51B5',
          'fg': '#fff'
        },
        'children': [
          {
            'id': 'amap',
            'title': 'Map',
            'type': 'item',
            'url': '/materials/amap'
          }, {
            'id': 'notification',
            'title': 'Notification',
            'type': 'item',
            'url': '/materials/notification'
          }, {
            'id': 'calendar',
            'title': 'Calendar',
            'type': 'item',
            'url': '/materials/calendar'
          }, {
            'id': 'popover',
            'title': 'Popover',
            'type': 'item',
            'url': '/materials/popover'
          }
        ]
      },
      {
        'id': 'forms',
        'title': 'Forms',
        'type': 'collapse',
        'icon': 'format_color_text',
        'badge': {
          'title': '2',
          'bg': '#ff6f00',
          'fg': '#fff'
        },
        'children': [
          {
            'id': 'elements',
            'title': 'Elements',
            'type': 'item',
            'url': '/forms/elements'
          }, {
            'id': 'validation',
            'title': 'Validation',
            'type': 'item',
            'url': '/forms/validation'
          }, {
            'id': 'editor',
            'title': 'Editor',
            'type': 'item',
            'url': '/forms/editor'
          }, {
            'id': 'json-schema',
            'title': 'Json-schema',
            'type': 'item',
            'url': '/forms/json-schema-form'
          }
        ]
      },
      {
        'id': 'table',
        'title': 'Tables',
        'type': 'collapse',
        'icon': 'list',
        'children': [
          {
            'id': 'static',
            'title': 'Static',
            'type': 'item',
            'url': '/tables/static'
          }, {
            'id': 'datatable',
            'title': 'Datatable',
            'type': 'item',
            'url': '/tables/datatable'
          }, {
            'id': 'dynamic',
            'title': 'Dynamic',
            'type': 'item',
            'url': '/tables/dynamic'
          }
        ]
      }, {
        'id': 'pages',
        'title': 'Pages',
        'type': 'collapse',
        'icon': 'content_copy',
        'children': [
          {
            'id': 'file-manager',
            'title': 'File manager',
            'type': 'item',
            'url': '/pages/file-manager'
          }, {
            'id': 'projects',
            'title': 'Projects',
            'type': 'item',
            'url': '/pages/projects'
          }, {
            'id': 'profile',
            'title': 'Profile',
            'type': 'item',
            'url': '/pages/profile'
          }, {
            'id': 'blog',
            'title': 'Blog',
            'type': 'item',
            'url': '/pages/blog'
          }, {
            'id': 'user',
            'title': 'User',
            'type': 'item',
            'url': '/pages/user'
          }
        ]
      }, {
        'id': 'extend',
        'title': 'More',
        'type': 'collapse',
        'icon': 'more_horiz',
        'children': [
          {
            'id': 'sigin',
            'title': 'Sign in',
            'type': 'item',
            'url': '/sigin'
          }, {
            'id': 'sigup',
            'title': 'Sign up',
            'type': 'item',
            'url': '/sigup'
          }
        ]
      }, {
        'id': 'apps',
        'title': 'Apps',
        'type': 'collapse',
        'icon': 'apps',
        'children': [
          {
            'id': 'todo',
            'title': 'To do',
            'type': 'item',
            'url': '/apps/todo/ALL'
          }, {
            'id': 'chats',
            'title': 'Chat',
            'type': 'item',
            'url': '/apps/chats'
          }, {
            'id': 'mail',
            'title': 'Mail',
            'type': 'item',
            'url': '/apps/mail'
          }, {
            'id': 'navigation',
            'title': 'Navigation',
            'type': 'item',
            'url': '/apps/navigation',
            'badge': {
              'title': '10',
              'bg': '#ff6f00',
              'fg': '#fff'
            }
          }
        ]
      }, {
        'id': 'analysis',
        'title': 'Analysis',
        'type': 'collapse',
        'icon': 'poll',
        'children': [
          {
            'id': 'crowd',
            'title': '人群分布',
            'type': 'item',
            'url': '/analysis/crowd'
          }, {
            'id': 'preference',
            'title': '行为偏好',
            'type': 'item',
            'url': '/analysis/preference'
          }, {
            'id': 'population',
            'title': '人口分布',
            'type': 'item',
            'url': '/analysis/population'
          }, {
            'id': 'equipment',
            'title': '设备分布',
            'type': 'item',
            'url': '/analysis/equipment'
          }, {
            'id': 'scePortrait',
            'title': '场景画像',
            'type': 'item',
            'url': '/analysis/scePortrait'
          }
        ]
      }, {
        'id': 'crm',
        'title': 'CRM',
        'type': 'collapse',
        'icon': 'business',
        'children': [
          {
            'id': 'lead',
            'title': 'Lead',
            'type': 'item',
            'url': '/crm/lead'
          }, {
            'id': 'contacts',
            'title': 'Contacts',
            'type': 'item',
            'url': '/crm/contacts'
          }
        ]
      }, {
        'id': 'apm',
        'title': 'APM',
        'type': 'collapse',
        'icon': 'code',
        'children': [
          {
            'id': 'error',
            'title': 'Error',
            'type': 'item',
            'url': '/apm/error'
          }, {
            'id': 'performance',
            'title': 'Performance',
            'type': 'item',
            'url': '/apm/performance'
          }
        ]
      }
    ];
  }

}
