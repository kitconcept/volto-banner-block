// Called by the settings form with the changed field. It stores the new value
// next to the rest of the block data, which the block then renders.
export const BannerBlockDataAdapter = ({
  block,
  data,
  id,
  onChangeBlock,
  value,
}) => {
  onChangeBlock(block, {
    ...data,
    [id]: value,
  });
};
