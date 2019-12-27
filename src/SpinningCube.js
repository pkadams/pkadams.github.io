import React, {Component} from 'react';
import * as three from 'three';


class SpinningCube extends Component {

	componentDidMount() {
		const scene = new three.Scene();
		var camera = new three.PerspectiveCamera( 75, 800/600, 0.1, 1000 );
		var renderer = new three.WebGLRenderer();
		renderer.setSize(800, 600);
		this.refs.anchor.appendChild(renderer.domElement);
		var geometry = new three.BoxGeometry( 1, 1, 1 );
		var material = new three.MeshBasicMaterial( { color: 0x00ff00 } );
		var cube = new three.Mesh( geometry, material );
		scene.add( cube );

		camera.position.z = 5;
		renderer.render(scene, camera);
		var animate = function () {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.05;
				cube.rotation.y += 0.05;

				renderer.render( scene, camera );
			};
		animate();
	}

	render() {

		return (<div data-aos="fade-up" data-aos-anchor-placement="center-bottom" style={{backgroundColor: 'coral'}}>
					<p> Hello There!</p>
				
					<div ref="anchor" style={{width: 800, height:600}} />
					 
				</div>);
	}


}

export default SpinningCube;