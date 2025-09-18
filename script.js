// Your code here.
const container = document.getElementById('container');
    const cubes = document.querySelectorAll('.cube');

    let selectedCube = null;
    let offsetX = 0, offsetY = 0;

    cubes.forEach(cube => {
      cube.addEventListener('mousedown', (e) => {
        selectedCube = cube;
        const rect = cube.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        cube.style.zIndex = 1000; // bring to front
      });
    });

    document.addEventListener('mousemove', (e) => {
      if (!selectedCube) return;

      const containerRect = container.getBoundingClientRect();
      const cubeRect = selectedCube.getBoundingClientRect();

      let newLeft = e.clientX - containerRect.left - offsetX;
      let newTop = e.clientY - containerRect.top - offsetY;

      // boundary constraints
      if (newLeft < 0) newLeft = 0;
      if (newTop < 0) newTop = 0;
      if (newLeft + cubeRect.width > containerRect.width) {
        newLeft = containerRect.width - cubeRect.width;
      }
      if (newTop + cubeRect.height > containerRect.height) {
        newTop = containerRect.height - cubeRect.height;
      }

      selectedCube.style.left = newLeft + 'px';
      selectedCube.style.top = newTop + 'px';
    });

    document.addEventListener('mouseup', () => {
      if (selectedCube) {
        selectedCube.style.zIndex = 1;
        selectedCube = null;
      }
    });
