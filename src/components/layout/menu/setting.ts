/**
 * @Author: LiuCheng
 * @Date: 2023/8/30
 * @Time: 16:08
 * @Descriptions:
 */
export const menus: IMenus[] = [
  {
    icon: 'location',
    title: 'Navigator One',
    children: [
      {
        type: 'group',
        title: 'Group One',
      },
      {
        title: 'item one',
      },
      {
        title: 'item two',
      },
      {
        type: 'group',
        title: '分组1',
      },
      {
        title: 'item three',
      },
      {
        title: 'item four',
        children: [
          {
            title: 'item one',
          }
        ],
      }
    ],
  }
]
export interface IMenus {
  title: string;
  type?: 'group' | undefined;
  link?: string;
  icon?: string;
  children?: IMenus[];
}