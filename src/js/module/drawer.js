import MicroModal from 'micromodal';

export const drawerConfig = () => {
  MicroModal.init({
    disableScroll: true,
    awaitOpenAnimation: true,
    awaitCloseAnimation: true,
  });
};
