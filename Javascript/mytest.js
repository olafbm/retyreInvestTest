window.onload = function onLoad() {

var bar = new ProgressBar.Line(container3,  {
    
    strokeWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    color: '#20a6df',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%', borderRadius: '30px'},
    text: {
        style: {
          // Text color.
          // Default: same as stroke color (options.color)
          color: '#999',
          position: 'absolute',
          right: '34',
          bottom: '30px',
          padding: 0,
          margin: 0,
          transform: null
        },
        autoStyleContainer: false
      },
      text2: {
        style: {
          // Text color.
          // Default: same as stroke color (options.color)
          color: '#999',
          position: 'absolute',
          right: '45',
          top: '30px',
          padding: 0,
          margin: 0,
          transform: null
        },
        autoStyleContainer: false
      },
     
  from: {color: '#00000'},
  to: {color: '#20a6df'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
    bar.setText(Math.round(bar.value() * 1000000) + 'NOK');
}
  });


bar.setText('34');
  bar.animate(0.7);  // Number from 0.0 to 1.0

  
 
}
function myFunction(bar) {
    
    bar.animate(0.5);
  }