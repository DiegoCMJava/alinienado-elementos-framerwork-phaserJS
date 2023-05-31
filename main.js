class AlignBase extends Phaser.Scene {

    //constructor hace una llamada al constructor de la clase padre, 
    //pasando el nombre de la escena. Este nombre nos servirá para 
    //referirnos a la escena siempre que sea necesario, por ejemplo
    // para escuchar mensajes, para cambiar la escena activa, etc.
    constructor ()
    {
        super();
    };

// hacer la precarga de todos los elementos que requiere esta escena para funcionar,
// como imágenes, sonidos, etc. Incluso podemos hacer la precarga de los elementos
// que van a requerir otras escenas    
preload () {

    // cargando ruta en donde se almacenan las imagenes
   this.load.setPath('assets/sprites');

    // identificando las imágenes individualmente
    this.load.image('image1', 'attack0.png');
    this.load.image('image2', 'attack1.png');
    this.load.image('image3', 'attack2.png');
    this.load.image('image4', 'attack3.png');
};

//  método create que se ejecuta cuando ya se han cargado todos los elementos 
//y tiene el código necesario para crear la escena. En este método se 
//colocarán todos los elementos necesarios, como el jugador, las plataformas,
// enemigos, decorados, etc.
create () {

    // dibujando la base
    this.add.rectangle(0, 500, 800, 100, 0x9d2d9d).setOrigin(0, 0);

    // creando un arreglo para agrupar las imágenes individuales
    const sprites = [];

    for (let i = 1; i < 5; i++) {
        // agregando imágenes individuales al arreglo
        sprites.push(this.add.sprite(150, 467, `image${i}`));
  
        
    };
    // Alinea todos los sprites contra la derecha  del primero.
    Phaser.Actions.AlignTo(sprites, Phaser.Display.Align.RIGHT_BOTTOM); 
};
};

// configurar el entorno para mostrar el lienzo
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    pixelArt: true,
    scene: AlignBase

 };

 // creación del juego 
 const game = new Phaser.Game(config);
