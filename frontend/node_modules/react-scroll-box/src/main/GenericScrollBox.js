import React from 'react';
import {findDOMNode} from 'react-dom';
import {any, bool, element, func, node, number, object, oneOf, string} from 'prop-types';

function isCoordinate(value) {
  return value != null && !isNaN(value);
}

export const FastTrackMode = {
  PAGING: 'paging',
  GOTO: 'goto'
};

export const ScrollCause = {
  HANDLE_DRAG: 0,
  MOUSE_WHEEL: 1,
  FAST_TRACK: 2,
  KEYBOARD: 3,
  TOUCH: 4
};

export const FastTrackModeShape = oneOf([FastTrackMode.GOTO, FastTrackMode.PAGING]);

export function easeQuadOut(percent, elapsed, min, max, duration) {
  percent -= 1;
  return min + max * Math.sqrt(1 - Math.pow(percent, 2));
}

export class GenericScrollBox extends React.Component {

  static propTypes = {
    // Viewport element.
    children: element.isRequired,

    // Use client scroll bars.
    clientScrollBars: bool,

    className: any,
    style: object,

    disabled: bool,

    // Events
    onScroll: func,
    onScrollX: func,
    onScrollY: func,

    onScrollStart: func,
    onScrollStartX: func,
    onScrollStartY: func,

    onScrollEnd: func,
    onScrollEndX: func,
    onScrollEndY: func,

    // Allow scrolling in corresponding direction.
    disableScrollX: bool,
    disableScrollY: bool,

    // Toggle scroll bar visibility for corresponding direction.
    hideScrollBarX: bool,
    hideScrollBarY: bool,

    // Toggle show scroll bars outside of scroll box rectangle.
    // This has no effect when client scroll bars are enabled and they are shown above content.
    outsetScrollBarX: bool,
    outsetScrollBarY: bool,

    // Minimum number of pixels when scroll bars are required.
    scrollMinX: number,
    scrollMinY: number,

    // Distance from cursor to edge of the scroll track when scroll bar is considered to be hovered.
    trackHoverProximityX: number,
    trackHoverProximityY: number,

    // Default easing functions applied when scroll with non-zero duration is requested.
    easingX: func,
    easingY: func,

    // Handle drag
    captureHandleDragX: bool,
    captureHandleDragY: bool,
    permitHandleDragInterruption: bool,

    // Fast tracking occurs when user clicks on scroll track.
    captureFastTrackX: bool,
    captureFastTrackY: bool,

    fastTrackModeX: FastTrackModeShape,
    fastTrackModeY: FastTrackModeShape,

    fastTrackScrollDurationX: number,
    fastTrackScrollDurationY: number,

    // Keyboard
    captureKeyboard: bool,
    keyboardStepX: number,
    keyboardStepY: number,
    keyboardScrollDurationX: number,
    keyboardScrollDurationY: number,

    // Wheel
    captureWheel: bool,
    lineHeight: number,
    wheelStepX: number,
    wheelStepY: number,
    propagateWheelScrollX: bool,
    propagateWheelScrollY: bool,
    swapWheelAxes: bool,
    wheelScrollDurationX: number,
    wheelScrollDurationY: number,

    // Touch
    captureTouch: bool,
    propagateTouchScrollX: bool,
    propagateTouchScrollY: bool,

    // Layout
    trackChildrenX: node,
    trackChildrenY: node,
    handleChildrenX: node,
    handleChildrenY: node
  };

  static defaultProps = {
    clientScrollBars: false,
    className: 'scroll-box--wrapped',

    disabled: false,

    onScroll: (target, dx, dy, causeX, causeY) => {},
    onScrollX: (target, dx, causeX) => {},
    onScrollY: (target, dy, causeY) => {},

    onScrollStart: (target, causeX, causeY) => {},
    onScrollStartX: (target, causeX) => {},
    onScrollStartY: (target, causeY) => {},

    onScrollEnd: (target, causeX, causeY) => {},
    onScrollEndX: (target, causeX) => {},
    onScrollEndY: (target, causeY) => {},

    disableScrollX: false,
    disableScrollY: false,

    hideScrollBarX: false,
    hideScrollBarY: false,

    outsetScrollBarX: false,
    outsetScrollBarY: false,

    scrollMinX: 2,
    scrollMinY: 2,

    trackHoverProximityX: 50,
    trackHoverProximityY: 50,

    easingX: easeQuadOut,
    easingY: easeQuadOut,

    // Handle drag
    captureHandleDragX: true,
    captureHandleDragY: true,
    permitHandleDragInterruption: true,

    // Fast track
    captureFastTrackX: true,
    captureFastTrackY: true,

    fastTrackModeX: FastTrackMode.GOTO,
    fastTrackModeY: FastTrackMode.GOTO,

    fastTrackScrollDurationX: 500,
    fastTrackScrollDurationY: 500,

    // Keyboard
    captureKeyboard: true,
    keyboardStepX: 30,
    keyboardStepY: 30,
    keyboardScrollDuration: 200,

    // Wheel
    captureWheel: true,
    lineHeight: 24,
    wheelStepX: 100,
    wheelStepY: 100,
    propagateWheelScrollX: true,
    propagateWheelScrollY: true,
    swapWheelAxes: false,
    wheelScrollDurationX: 100,
    wheelScrollDurationY: 100,

    // Touch
    captureTouch: true,
    propagateTouchScrollX: true,
    propagateTouchScrollY: true,
  };

  constructor(props) {
    super(props);

    let _scrollX = 0,
        _scrollY = 0,
        _previousX = 0,
        _previousY = 0,
        _targetX = 0,
        _targetY = 0,
        _durationX = 0,
        _durationY = 0,
        _easingX,
        _easingY,
        _timestampX = 0,
        _timestampY = 0,
        _dispatchPrevented = false,

        _scrollMaxX = 0,
        _scrollMaxY = 0,

        _trackMaxX = 0,
        _trackMaxY = 0,

        _requiresScrollBarX = false,
        _requiresScrollBarY = false,

        _requestId,

        _scrollingX = false,
        _scrollingY = false,

        _causeX = null,
        _causeY = null,

        _tickX = 0,
        _tickY = 0,

        _root,
        _viewport,
        _handleX,
        _handleY,
        _trackX,
        _trackY;


    this.render = () => {
      const {
          className,
          style,
          disabled,

          outsetScrollBarX,
          outsetScrollBarY,

          clientScrollBars,

          disableScrollX,
          disableScrollY,
          hideScrollBarX,
          hideScrollBarY,

          children,
          trackChildrenX,
          trackChildrenY,
          handleChildrenX,
          handleChildrenY
      } = this.props;

      let classNames = ['scroll-box'];
      if (className) {
        classNames = classNames.concat(className);
      }
      if (disabled) {
        classNames.push('scroll-box--disabled');
      }
      if (outsetScrollBarX) {
        classNames.push('scroll-box--outset-x');
      }
      if (outsetScrollBarY) {
        classNames.push('scroll-box--outset-y');
      }
      if (!disableScrollX && !hideScrollBarX) {
        classNames.push('scroll-box--enable-x');
      }
      if (!disableScrollY && !hideScrollBarY) {
        classNames.push('scroll-box--enable-y');
      }
      if (clientScrollBars) {
        classNames.push('scroll-box--client-scroll-bars');
      }

      return (
          <div style={style}
               className={classNames.join(' ')}
               onWheel={handleWheel}
               onKeyDown={handleKeyDown}
               onTouchStart={handleTouchStart}
               tabIndex="-1">
            {children}
            <div className="scroll-box__track scroll-box__track--x"
                 onMouseDown={handleFastTrackX}
                 ref="trackX">
              <div className="scroll-box__handle scroll-box__handle--x"
                   onMouseDown={handleDragStartX}
                   ref="handleX">
                {handleChildrenX}
              </div>
              {trackChildrenX}
            </div>
            <div className="scroll-box__track scroll-box__track--y"
                 onMouseDown={handleFastTrackY}
                 ref="trackY">
              <div className="scroll-box__handle scroll-box__handle--y"
                   onMouseDown={handleDragStartY}
                   ref="handleY">
                {handleChildrenY}
              </div>
              {trackChildrenY}
            </div>
          </div>
      );
    };

    this.componentDidMount = () => {
      _root = findDOMNode(this);

      const {handleX, handleY, trackX, trackY} = this.refs;

      _handleX = findDOMNode(handleX);
      _handleY = findDOMNode(handleY);
      _trackX = findDOMNode(trackX);
      _trackY = findDOMNode(trackY);

      _viewport = _root.firstElementChild;

      const requestPropagateChanges = () => {
        if (window.cancelAnimationFrame) {
          _requestId = requestAnimationFrame(requestPropagateChanges);
        } else {
          _requestId = setTimeout(requestPropagateChanges, 1000 / 30);
        }
        propagateChanges();
      };

      requestPropagateChanges();
      addEventListener('mousemove', handleBarHover);
    };

    this.componentWillUnmount = () => {
      _root = null;

      if (window.cancelAnimationFrame) {
        cancelAnimationFrame(_requestId);
      } else {
        clearTimeout(_requestId);
      }
      removeEventListener('mousemove', handleBarHover);
    };

    this.componentDidUpdate = () => {
      _viewport = _root.firstElementChild;

      propagateChanges();
    };

    this.scrollTo = ({
        x, y,

        easing,
        easingX = easing || this.props.easingX,
        easingY = easing || this.props.easingY,

        duration = 0,
        durationX = duration,
        durationY = duration,

        dispatchPrevented = false
    } = {}) => {

      if (isCoordinate(x)) {
        _previousX = _scrollX;
        _targetX = x | 0;
        _easingX = easingX;
        _durationX = durationX;
        _timestampX = Date.now();
        _dispatchPrevented = dispatchPrevented;
        _tickX++;
      }

      if (isCoordinate(y)) {
        _previousY = _scrollY;
        _targetY = y | 0;
        _easingY = easingY;
        _durationY = durationY;
        _timestampY = Date.now();
        _dispatchPrevented = dispatchPrevented;
        _tickY++;
      }

      propagateChanges();
    };

    this.scrollToX = (x, options = {}) => this.scrollTo({...options, x});

    this.scrollToY = (y, options = {}) => this.scrollTo({...options, y});

    this.scrollBy = ({dx, dy, ...options} = {}) => {
      this.scrollTo({
        ...options,
        x: _targetX + dx,
        y: _targetY + dy
      });
    };
    
    this.scrollByX = (dx, options = {}) => this.scrollBy({...options, dx});
    
    this.scrollByY = (dy, options = {}) => this.scrollBy({...options, dy});

    this.scrollToPage = ({
        x, y,
        ...options
    } = {}) => {
      x *= this.getPageWidth();
      y *= this.getPageHeight();
      this.scrollTo({...options, x, y});
    };

    this.scrollToPageX = (x, options = {}) => this.scrollToPage({...options, x});

    this.scrollToPageY = (y, options = {}) => this.scrollToPage({...options, y});

    this.scrollByPage = ({
        dx, dy,
        ...options
    } = {}) => {
      dx *= this.getPageWidth();
      dy *= this.getPageHeight();
      this.scrollBy({...options, dx, dy});
    };

    this.scrollByPageX = (dx, options = {}) => this.scrollByPage({...options, dx});

    this.scrollByPageY = (dy, options = {}) => this.scrollByPage({...options, dy});

    this.getPageWidth = () => _viewport.clientWidth;

    this.getPageHeight = () => _viewport.clientHeight;

    Object.defineProperties(this, {
      targetX: {
        get: () => _targetX,
        set: x => this.scrollToX(x)
      },
      targetY: {
        get: () => _targetY,
        set: y => this.scrollToY(y)
      },
      scrollX: {
        get: () => _scrollX,
        set: x => this.scrollToX(x)
      },
      scrollY: {
        get: () => _scrollY,
        set: y => this.scrollToY(y)
      },
      scrollMaxX: {
        get: () => _scrollMaxX
      },
      scrollMaxY: {
        get: () => _scrollMaxY
      }
    });

    const propagateChanges = () => {
      const {
          disableScrollX,
          disableScrollY,

          scrollMinX,
          scrollMinY,

          clientScrollBars,

          outsetScrollBarX,
          outsetScrollBarY,

          onScroll,
          onScrollX,
          onScrollY,

          onScrollStart,
          onScrollStartX,
          onScrollStartY,

          onScrollEnd,
          onScrollEndX,
          onScrollEndY
      } = this.props;

      const {
          clientWidth,
          clientHeight,

          offsetWidth,
          offsetHeight,

          scrollWidth,
          scrollHeight,

          scrollTop,
          scrollLeft
      } = _viewport;

      _scrollMaxX = scrollWidth - clientWidth;
      _scrollMaxY = scrollHeight - clientHeight;

      _requiresScrollBarX = !disableScrollX && _scrollMaxX >= scrollMinX;
      _requiresScrollBarY = !disableScrollY && _scrollMaxY >= scrollMinY;

      _root.classList.toggle('scroll-box--requires-x', _requiresScrollBarX);
      _root.classList.toggle('scroll-box--requires-y', _requiresScrollBarY);

      if (clientScrollBars && outsetScrollBarX) {
        _viewport.style.height = `calc(100% + ${offsetHeight - clientHeight}px)`;
      } else {
        _viewport.style.height = '100%';
      }
      if (clientScrollBars && outsetScrollBarY) {
        _viewport.style.width = `calc(100% + ${offsetWidth - clientWidth}px)`;
      } else {
        _viewport.style.width = '100%';
      }

      _targetX = Math.max(0, Math.min(_targetX, _scrollMaxX));
      _targetY = Math.max(0, Math.min(_targetY, _scrollMaxY));

      let nextScrollX = _scrollX,
          nextScrollY = _scrollY;

      if (_scrollX == scrollLeft && _scrollY == scrollTop) {
        // Controlled scroll position coincides with viewport position.

        if (nextScrollX != _targetX) {
          const elapsedX = Date.now() - _timestampX;
          if (elapsedX < _durationX) {
            nextScrollX = _previousX + _easingX(elapsedX / _durationX, elapsedX, 0, 1, _durationX) * (_targetX - _previousX) | 0;
          } else {
            nextScrollX = _targetX;
          }
        }
        if (nextScrollY != _targetY) {
          const elapsedY = Date.now() - _timestampY;
          if (elapsedY < _durationY) {
            nextScrollY = _previousY + _easingY(elapsedY / _durationY, elapsedY, 0, 1, _durationY) * (_targetY - _previousY) | 0;
          } else {
            nextScrollY = _targetY;
          }
        }
      }

      const clientScrollingX = _scrollX != scrollLeft,
            clientScrollingY = _scrollY != scrollTop;

      if (clientScrollingX) {
        _targetX = nextScrollX = scrollLeft;
      }
      if (clientScrollingY) {
        _targetY = nextScrollY = scrollTop;
      }

      const nextScrollingX = nextScrollX != _targetX,
            nextScrollingY = nextScrollY != _targetY;

      const dx = _scrollX - nextScrollX,
            dy = _scrollY - nextScrollY;

      const tickX = _tickX,
            tickY = _tickY;

      if (!_dispatchPrevented) {
        // Events can be triggered.
        // Checking ticks after each event callback invocation to ensure that any scroll
        // methods were not called inside those callbacks.

        if (
            (nextScrollingX | nextScrollingY | clientScrollingX | clientScrollingY) &&
            !_scrollingX && !_scrollingY
        ) {
          onScrollStart(this, _causeX, _causeY);
        }
        if (tickX == _tickX && nextScrollingX && !_scrollingX) {
          onScrollStartX(this, _causeX);
        }
        if (tickY == _tickY && nextScrollingY && !_scrollingY) {
          onScrollStartY(this, _causeY);
        }

        if (
            tickX == _tickX && tickY == _tickY &&
            (dx | dy)
        ) {
          onScroll(this, dx, dy, _causeX, _causeY);
        }
        if (tickX == _tickX && dx) {
          onScrollX(this, dx, _causeX);
        }
        if (tickY == _tickY && dy) {
          onScrollY(this, dy, _causeY);
        }

        if (
            tickX == _tickX && tickY == _tickY &&
            !nextScrollingX && !nextScrollingY &&
            (_scrollingX | _scrollingY | clientScrollingX | clientScrollingY)
        ) {
          onScrollEnd(this, _causeX, _causeY);
        }
        if (tickX == _tickX && !nextScrollingX && _scrollingX) {
          onScrollEndX(this, _causeX);
        }
        if (tickY == _tickY && !nextScrollingY && _scrollingY) {
          onScrollEndY(this, _causeY);
        }

        if (tickX == _tickX && _causeX != ScrollCause.TOUCH | _causeX != ScrollCause.HANDLE_DRAG) {
          _causeX = null;
        }
        if (tickY == _tickY && _causeY != ScrollCause.TOUCH | _causeY != ScrollCause.HANDLE_DRAG) {
          _causeY = null;
        }
      }

      if (dx && tickX == _tickX) {
        _viewport.scrollLeft = _scrollX = nextScrollX;
      }

      if (dy && tickY == _tickY) {
        _viewport.scrollTop = _scrollY = nextScrollY;
      }

      if (!clientScrollBars) {
        _trackMaxX = _trackX.clientWidth - _handleX.offsetWidth;
        _handleX.style.width = clientWidth / scrollWidth * 100 + '%';
        _handleX.style.left = _trackMaxX * nextScrollX / _scrollMaxX + 'px';

        _trackMaxY = _trackY.clientHeight - _handleY.offsetHeight;
        _handleY.style.height = clientHeight / scrollHeight * 100 + '%';
        _handleY.style.top = _trackMaxY * nextScrollY / _scrollMaxY + 'px';
      }
    };

    const handleKeyDown = event => {
      const {target: {tagName}, keyCode, shiftKey} = event;

      const {
          disabled,
          captureKeyboard,
          keyboardStepX,
          keyboardStepY,
          keyboardScrollDuration
      } = this.props;

      if (disabled | !captureKeyboard | tagName == 'TEXTAREA' | tagName == 'INPUT') {
        // Do not handle any keyboard events when text-related controls are focused.
        return;
      }

      const options = {duration: keyboardScrollDuration};

      switch (keyCode) {

        case 36: // Home
          event.preventDefault();
          _causeY = ScrollCause.KEYBOARD;
          this.scrollToY(0, options);
          break;

        case 35: // End
          event.preventDefault();
          _causeY = ScrollCause.KEYBOARD;
          this.scrollToY(_scrollMaxY, options);
          break;

        case 33: // Page Up
        case 34: // Page Down
          event.preventDefault();
          let dy = this.getPageHeight(),
              dx = this.getPageWidth();

          if (keyCode == 33) { // Page Up
            dy *= -1;
            dx *= -1;
          }
          if (shiftKey) {
            _causeX = ScrollCause.KEYBOARD;
            this.scrollByX(dx, options);
          } else {
            _causeY = ScrollCause.KEYBOARD;
            this.scrollByY(dy, options);
          }
          break;

        case 38: // Up
          event.preventDefault();
          _causeY = ScrollCause.KEYBOARD;
          this.scrollByY(-keyboardStepY, options);
          break;

        case 40: // Down
          event.preventDefault();
          _causeY = ScrollCause.KEYBOARD;
          this.scrollByY(keyboardStepY, options);
          break;

        case 37: // Left
          event.preventDefault();
          _causeX = ScrollCause.KEYBOARD;
          this.scrollByX(-keyboardStepX, options);
          break;

        case 39: // Right
          event.preventDefault();
          _causeX = ScrollCause.KEYBOARD;
          this.scrollByX(keyboardStepX, options);
          break;
      }
    };

    const handleFastTrack = (event, isHorizontal) => {
      const {
          disabled,

          captureFastTrackX,
          captureFastTrackY,

          fastTrackModeX,
          fastTrackModeY,

          fastTrackScrollDurationX,
          fastTrackScrollDurationY
      } = this.props;

      if (disabled | !captureFastTrackX && !captureFastTrackY | event.button) {
        // Component is disabled or secondary mouse button is being pressed.
        return;
      }

      const {
          clientWidth,
          clientHeight,
          scrollWidth,
          scrollHeight
      } = _viewport;

      if (isHorizontal) {
        if (!captureFastTrackX) {
          return;
        }
        _causeX = ScrollCause.FAST_TRACK;

        const pointerX = event.clientX - _trackX.getBoundingClientRect().left,
              optionsX = {duration: fastTrackScrollDurationX};

        switch (fastTrackModeX) {

          case FastTrackMode.PAGING:
            this.scrollToX(_targetX + (1 - 2 * (pointerX < _handleX.offsetLeft)) * this.getPageWidth(), optionsX);
            break;

          case FastTrackMode.GOTO:
            this.scrollToX(pointerX / _trackX.clientWidth * scrollWidth - clientWidth / 2, optionsX);
            break;
        }
      } else {
        if (!captureFastTrackY) {
          return;
        }
        _causeY = ScrollCause.FAST_TRACK;

        const pointerY = event.clientY - _trackY.getBoundingClientRect().top,
              optionsY = {duration: fastTrackScrollDurationY};

        switch (fastTrackModeY) {

          case FastTrackMode.PAGING:
            this.scrollToY(_targetY + (1 - 2 * (pointerY < _handleY.offsetTop)) * this.getPageHeight(), optionsY);
            break;

          case FastTrackMode.GOTO:
            this.scrollToY(pointerY / _trackY.clientHeight * scrollHeight - clientHeight / 2, optionsY);
            break;
        }
      }
    };

    const handleFastTrackX = event => handleFastTrack(event, true);

    const handleFastTrackY = event => handleFastTrack(event, false);

    const handleDragStart =  (event, isHorizontal) => {
      const {
          disabled,
          captureHandleDragX,
          captureHandleDragY,
          permitHandleDragInterruption
      } = this.props;

      // Handle can be dragged with left mouse button only.
      if (disabled | !captureHandleDragX && !captureHandleDragY | event.button) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      let track;
      if (isHorizontal) {
        _causeX = ScrollCause.HANDLE_DRAG;
        track = _trackX;
      } else {
        _causeY = ScrollCause.HANDLE_DRAG;
        track = _trackY;
      }

      const offsetX = event.clientX - _handleX.offsetLeft,
            offsetY = event.clientY - _handleY.offsetTop;

      const handleDrag = event => {
        if (!_root | event.button | permitHandleDragInterruption && (isHorizontal ? _causeX : _causeY) != ScrollCause.HANDLE_DRAG) {
          stopDrag();
          return;
        }

        if (isHorizontal) {
          _causeX = ScrollCause.HANDLE_DRAG;
          this.scrollToX(_scrollMaxX * (event.clientX - offsetX) / _trackMaxX);
        } else {
          _causeY = ScrollCause.HANDLE_DRAG;
          this.scrollToY(_scrollMaxY * (event.clientY - offsetY) / _trackMaxY);
        }
      };

      const handleDragEnd = () => {
        if (isHorizontal) {
          _causeX = null;
        } else {
          _causeY = null;
        }
        stopDrag();
      };

      const stopDrag = () => {
        removeEventListener('mousemove', handleDrag);
        removeEventListener('mouseup', handleDragEnd);

        track.classList.remove('scroll-box__track--dragged');
      };

      addEventListener('mousemove', handleDrag);
      addEventListener('mouseup', handleDragEnd);

      track.classList.add('scroll-box__track--dragged');
    };

    const handleDragStartX = event => handleDragStart(event, true);

    const handleDragStartY = event => handleDragStart(event, false);

    const handleWheel = event => {
      let {target, deltaMode, deltaX, deltaY, shiftKey} = event;

      const {
          wheelStepX,
          wheelStepY,
          disabled,
          clientScrollBars,
          captureWheel,
          lineHeight,
          propagateWheelScrollX,
          propagateWheelScrollY,
          swapWheelAxes,
          wheelScrollDurationX,
          wheelScrollDurationY
      } = this.props;

      if (clientScrollBars && !captureWheel) {
        event.preventDefault();
      }
      if (disabled | event.isDefaultPrevented()) {
        return;
      }
      if (target != _viewport && target.tagName == 'TEXTAREA') {
        // Nested textarea is focused and its is not a viewport.
        return;
      }

      // By default, Google Chrome changes scrolling orientation if shift key is pressed,
      // so propagate this behavior to other browsers as well.
      if (shiftKey && deltaX == 0) {
        deltaX = deltaY;
        deltaY = 0;
      }

      if (swapWheelAxes) {
        const buffer = deltaX;
        deltaX = deltaY;
        deltaY = buffer;
      }

      let dx = deltaX * _requiresScrollBarX,
          dy = deltaY * _requiresScrollBarY;

      if (deltaX && !_requiresScrollBarX | dx < 0 && !_targetX | dx > 0 && _targetX == _scrollMaxX) {
        // Content is scrolled to its possible limit.
        if (!propagateWheelScrollX) {
          event.preventDefault();
        }
        return;
      }
      if (deltaY && !_requiresScrollBarY | dy < 0 && !_targetY | dy > 0 && _targetY == _scrollMaxY) {
        if (!propagateWheelScrollY) {
          event.preventDefault();
        }
        return;
      }
      event.preventDefault();

      // Converts received delta values into pixels.
      switch (deltaMode) {

        case 0x01: // Delta values are specified in lines.
          dx *= lineHeight;
          dy *= lineHeight;
          break;

        case 0x02:
          dx *= this.getPageWidth();
          dy *= this.getPageHeight();
          break;

        default:
          // Delta values are specified in pixels.
          break;
      }

      dx *= wheelStepX / 100;
      dy *= wheelStepY / 100;

      let nextTargetX = _targetX + dx,
          nextTargetY = _targetY + dy;

      // Prevent jumping to target position when animated scrolling is in progress,
      // but preserve scroll speed when mouse wheel events arrive frequently.
      if (Date.now() - _timestampX > wheelScrollDurationX) {
        nextTargetX = _scrollX + dx;
      }
      if (Date.now() - _timestampX > wheelScrollDurationY) {
        nextTargetY = _scrollY + dy;
      }

      if (dx) {
        _causeX = ScrollCause.MOUSE_WHEEL;
        this.scrollToX(nextTargetX, {duration: wheelScrollDurationX});
      }
      if (dy) {
        _causeY = ScrollCause.MOUSE_WHEEL;
        this.scrollToY(nextTargetY, {duration: wheelScrollDurationY});
      }
    };

    const updateTrackHoverStatus = (event, track, proximity, status) => {
      if (status == null) {
        const {clientX, clientY} = event,
              {width, left, top, height} = track.getBoundingClientRect();
        status =
            proximity > clientY - height - top &&
            proximity > clientX - width - left &&
            proximity > left - clientX &&
            proximity > top - clientY;
      }
      track.classList.toggle('scroll-box__track--hover', status);
    };

    const handleBarHover = event => {
      const {
          disabled,
          clientScrollBars,
          captureHandleDragX,
          captureHandleDragY,
          captureFastTrackX,
          captureFastTrackY,
          trackHoverProximityX,
          trackHoverProximityY
      } = this.props;

      if ('orientation' in window | clientScrollBars | disabled) {
        return;
      }

      if (event.buttons) {
        if (_causeX != ScrollCause.HANDLE_DRAG) {
          var statusX = false;
        }
        if (_causeY != ScrollCause.HANDLE_DRAG) {
          var statusY = false;
        }
      }

      if (_requiresScrollBarX && (captureHandleDragX | captureFastTrackX)) {
        updateTrackHoverStatus(event, _trackX, trackHoverProximityX, statusX);
      }
      if (_requiresScrollBarY && (captureHandleDragY | captureFastTrackY)) {
        updateTrackHoverStatus(event, _trackY, trackHoverProximityY, statusY);
      }
    };

    const handleTouchStart = event => {
      const {target, touches} = event;

      const {
          disabled,
          clientScrollBars,
          captureTouch,
          propagateTouchScrollX,
          propagateTouchScrollY,
      } = this.props;

      if (clientScrollBars && !captureTouch) {
        event.preventDefault();
      }
      if (clientScrollBars | disabled | touches.length > 1 | event.isDefaultPrevented()) {
        return;
      }
      if (target != _viewport && target.tagName == 'TEXTAREA') {
        // Nested textarea is focused and its is not a viewport.
        return;
      }

      const {
          clientX: initialClientX,
          clientY: initialClientY
      } = touches[0];

      let scrolled = false;

      const handleTouchMove = event => {
        const {targetX, targetY, scrollMaxX, scrollMaxY} = this;
        const {clientX, clientY} = event.touches[0];
        const dx = initialClientX - clientX,
              dy = initialClientY - clientY;

        if (
            (dx < 0 && !targetX) || (dx > 0 && targetX == scrollMaxX) ||
            (dy < 0 && !targetY) || (dy > 0 && targetY == scrollMaxY)
        ) {
          if (!scrolled) {
            disposeTouch();
          }
          return;
        }

        scrolled = true;
        event.preventDefault();
        this.scrollTo({x: _scrollX + dx, y: _scrollY + dy});
      };

      const handleTouchEnd = event => {
        disposeTouch();
      };

      const disposeTouch = () => {
        removeEventListener('touchmove', handleTouchMove);
        removeEventListener('touchend', handleTouchEnd);
        removeEventListener('touchcancel', handleTouchEnd);
      };

      addEventListener('touchmove', handleTouchMove);
      addEventListener('touchend', handleTouchEnd);
      addEventListener('touchcancel', handleTouchEnd);
    };
  }
}
