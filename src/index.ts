function test(arg: string): void {
    const element: HTMLHeadingElement = document.createElement('h1');
    element.textContent = arg;

    document.body.append(element);
}

test('HELLO WORLD');
