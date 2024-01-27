// import FlyingButton from 'react-flying-item'

export default function AddToCartButton({
  hasSizesOrExtras, onClick, basePrice, image
}) {
  if (!hasSizesOrExtras) {
    return (
      <div className="flying-button-parent mt-4">
        <button
          // targettop={'5%'}
          // targetleft={'95%'}
          src={image}>
          <div onClick={onClick}>
            Add to cart 
            {/* ${basePrice} */}
          </div>
        </button>
      </div>
    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-4 bg-blue-500 text-white rounded-full px-2 py-2"
      style={{width: '50%'}}
    >
      <span>Add to cart
         {/* (from ${basePrice}) */}
         </span>
    </button>
  );
}