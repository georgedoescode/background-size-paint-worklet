class BGSizePaintWorklet {
  static get inputProperties() {
    return [
      '--paint-worklet-width',
      '--paint-worklet-height',
      '--paint-worklet-scale-mode',
    ];
  }

  scaleContext(
    ctx,
    elementWidth,
    elementHeight,
    workletWidth,
    workletHeight,
    scaleMode
  ) {
    const horizontalRatio = elementWidth / workletWidth;
    const verticalRatio = elementHeight / workletHeight;

    const ratio =
      scaleMode === 'contain'
        ? Math.min(horizontalRatio, verticalRatio)
        : Math.max(horizontalRatio, verticalRatio);

    const centerShiftX = (elementWidth - workletWidth * ratio) / 2;
    const centerShiftY = (elementHeight - workletHeight * ratio) / 2;

    ctx.setTransform(ratio, 0, 0, ratio, centerShiftX, centerShiftY);
  }

  getWorkletDimensions(props) {
    return {
      width: props.get('--paint-worklet-width').value,
      height: props.get('--paint-worklet-height').value,
      scaleMode: props.get('--paint-worklet-scale-mode').value,
    };
  }
}

export { BGSizePaintWorklet };
