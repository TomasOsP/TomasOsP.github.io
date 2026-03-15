// Particle Animation Background
class ParticleBackground {
  constructor() {
    this.canvas = document.getElementById('particle-canvas');
    if (!this.canvas) return;
    
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.particleCount = 80;
    this.connectionDistance = 150;
    this.mouseRadius = 100;
    this.mouse = { x: null, y: null };
    
    this.init();
    this.animate();
    this.handleResize();
    this.handleMouse();
  }

  init() {
    this.resize();
    this.createParticles();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  handleResize() {
    window.addEventListener('resize', () => {
      this.resize();
      this.particles = [];
      this.createParticles();
    });
  }

  handleMouse() {
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.x;
      this.mouse.y = e.y;
    });

    window.addEventListener('mouseout', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }

  createParticles() {
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
  }

  drawParticle(particle) {
    // Get computed style for theme awareness
    const isDarkTheme = document.documentElement.getAttribute('data-theme') === 'dark';
    const color = isDarkTheme ? '100, 180, 255' : '0, 123, 255';
    
    this.ctx.beginPath();
    this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = `rgba(${color}, ${particle.opacity})`;
    this.ctx.fill();
  }

  connectParticles() {
    const isDarkTheme = document.documentElement.getAttribute('data-theme') === 'dark';
    const color = isDarkTheme ? '100, 180, 255' : '0, 123, 255';
    
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < this.connectionDistance) {
          const opacity = (1 - distance / this.connectionDistance) * 0.3;
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(${color}, ${opacity})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }
    }
  }

  updateParticle(particle) {
    // Mouse interaction
    if (this.mouse.x && this.mouse.y) {
      const dx = this.mouse.x - particle.x;
      const dy = this.mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < this.mouseRadius) {
        const force = (this.mouseRadius - distance) / this.mouseRadius;
        particle.x -= dx * force * 0.02;
        particle.y -= dy * force * 0.02;
      }
    }

    // Update position
    particle.x += particle.vx;
    particle.y += particle.vy;

    // Boundary bounce
    if (particle.x < 0 || particle.x > this.canvas.width) {
      particle.vx *= -1;
    }
    if (particle.y < 0 || particle.y > this.canvas.height) {
      particle.vy *= -1;
    }

    // Keep particles in bounds
    particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
    particle.y = Math.max(0, Math.min(this.canvas.height, particle.y));
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.particles.forEach(particle => {
      this.updateParticle(particle);
      this.drawParticle(particle);
    });
    
    this.connectParticles();
    
    requestAnimationFrame(() => this.animate());
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new ParticleBackground();
});
