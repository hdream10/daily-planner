import { Navigation } from 'react-native-navigation';

import TaskList from './src/screens/TaskList';
import EditList from './src/screens/EditList';

Navigation.registerComponent('TaskList', () => TaskList);
Navigation.registerComponent('EditList', () => EditList);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'TaskList',
            },
          },
        ],
      },
    },
  });
});