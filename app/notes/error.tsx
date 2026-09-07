'use client';

export default function Error(error: Error) {
    console.log(error);
    
    return (
        <p>error has occured</p>
    )
}