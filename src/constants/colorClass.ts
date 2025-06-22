const colorClass = (type: string): string => {
    switch (type) {
        case 'info':
        case 'running':
            return 'text-green-500';
        case 'warn':
        case 'paused':
            return 'text-amber-500';
        case 'erro':
        case 'stopped':
            return 'text-red-500';
        default:
            return 'text-gray-400';
    }
};

export default colorClass;