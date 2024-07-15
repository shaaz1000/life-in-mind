// src/images.d.ts
declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.jpg' {
    const value: string;
    export default value;
}

declare module '*.jpeg' {
    const value: string;
    export default value;
}

declare module '*.gif' {
    const value: string;
    export default value;
}

declare module '*.svg' {
    import React from 'react';
    const value: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default value;
}
