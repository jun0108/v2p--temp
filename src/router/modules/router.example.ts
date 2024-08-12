import Default from '~/layouts/Default.vue';

// views for Admin layout
import Index from '~/pages/example/index.vue';
import Buttons from '~/pages/example/Buttons.vue';
import Textfield from '~/pages/example/Textfield.vue';

const exampleRoute = {
  path: '/example',
  redirect: '/example',
  component: Default,
  children: [
    {
      path: '/example',
      component: Index,
    },
    {
      path: '/example/buttons',
      component: Buttons,
    },
    {
      path: '/example/textfield',
      component: Textfield,
    },
  ],
};

export default exampleRoute;
