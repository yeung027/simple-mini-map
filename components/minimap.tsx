import { useEffect, useRef, useState } from "react";


export default function MiniMap(props:{})
{
    const canvasRef                     = useRef<HTMLCanvasElement>(null);
    const [image, setImage]             = useState<HTMLImageElement>();
    
    useEffect(() => {
        if(!canvasRef || !canvasRef.current) return;
        let image = new Image();
        image.src = 'images/map_2kwidth.jpeg';
        image.onload = () =>{setImage(image);}
        // console.log('ref change')
    },[canvasRef]);

    useEffect(() => {
        if(!canvasRef || !canvasRef.current || !image) return; //console.error('canvas not found');
        let canvas:HTMLCanvasElement = canvasRef.current;
        let ctx         = canvas.getContext('2d', {alpha:true})!;
        let canvasRect  = canvas.getBoundingClientRect();
        // let imageRect   = image.getBoundingClientRect();
        canvas.width = canvasRect.width;
        canvas.height = canvasRect.height;
        var wRatio = canvas.width / image.width    ;
        var hRatio = wRatio /1.45;
        
        // ctx.drawImage(image!, 0, 0, canvasRef.current.width, canvasRef.current.height);//, 0,0,image.width*wRatio, image.height*hRatio
        ctx.drawImage(image!, 100, 50, image.width/1.9, image.height/1.9, 0, 0, canvas.width, canvas.height);
        console.log(`canvas rect: ${canvasRect.width}, ${canvasRect.height}, image rect: ${image.width}, ${image.height}`)
    },[image]);

    return  <div className="w-fit h-fit flex border border-2">
                <canvas ref={canvasRef} className="border-2 border-green-500 w-[80vw] h-[calc(80vw/1.45)]" />
            </div>
}