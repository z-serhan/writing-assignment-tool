import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavComponent } from './nav.component';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

  describe('NavComponent', () => {
    let component: NavComponent;
    let fixture: ComponentFixture<NavComponent>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [NavComponent],  // Import the standalone component
        providers: [
          provideRouter([])  // Provide an empty router configuration
        ]
      })
      .compileComponents();
  
      fixture = TestBed.createComponent(NavComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();  // Trigger change detection
    });

  it('should have the correct title in the navbar', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.navbar-brand').textContent).toContain('WAH');
  });

  it('should have 4 navigation links', () => {
    const compiled = fixture.nativeElement;
    const navLinks = compiled.querySelectorAll('.nav-link');
    expect(navLinks.length).toBe(4);  // Ensure there are 4 nav links
  });

  it('should contain a Home link', () => {
    const compiled = fixture.debugElement;
    const homeLink = compiled.query(By.css('a.nav-link[routerLink="/home"]'));
    expect(homeLink).toBeTruthy();  // Check if Home link exists
  });

  it('should contain an Assignments link', () => {
    const compiled = fixture.debugElement;
    const assignmentsLink = compiled.query(By.css('a.nav-link[routerLink="/assignments"]'));
    expect(assignmentsLink).toBeTruthy();  // Check if Assignments link exists
  });

  it('should contain a Practice link', () => {
    const compiled = fixture.debugElement;
    const practiceLink = compiled.query(By.css('a.nav-link[routerLink="practice"]'));
    expect(practiceLink).toBeTruthy();  // Check if Practice link exists
  });

  it('should contain an About link', () => {
    const compiled = fixture.debugElement;
    const aboutLink = compiled.query(By.css('a.nav-link[routerLink="about"]'));
    expect(aboutLink).toBeTruthy();  // Check if About link exists
  });
});