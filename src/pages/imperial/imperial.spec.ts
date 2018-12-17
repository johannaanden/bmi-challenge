import { ImperialPage } from "./imperial";
import { TestBed, async } from "@angular/core/testing";
import { IonicModule, Platform, NavController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { PlatformMock, StatusBarMock, SplashScreenMock, NavControllerMock } from "ionic-mocks";

describe("ImperialPage", () => {
  let imperialpage, fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ImperialPage
      ],
      imports: [IonicModule.forRoot(ImperialPage)],
      providers: [
        { provide: Platform, useFactory: () => PlatformMock.instance() },
        { provide: StatusBar, useFactory: () => StatusBarMock.instance() },
        { provide: SplashScreen, useFactory: () => SplashScreenMock.instance() },
        { provide: NavController, useFactory: () => NavControllerMock.instance() }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImperialPage);
    imperialpage = fixture.componentInstance;
  });

  it("should create the imperial page", () => {
    expect(imperialpage).toBeTruthy();
    expect(imperialpage instanceof ImperialPage).toEqual(true);
  });

  it("should calculate BMI", () => {
    imperialpage.height = 65;
    imperialpage.weight = 150;

    spyOn(imperialpage, "setBMIMessage");
    imperialpage.calculateBMI();
    expect(imperialpage.setBMIMessage).toHaveBeenCalled;
    expect(imperialpage.bmiValue).toEqual(24.96);
  });

  it("should show Underweight if bmiValue is under 18.5", () => {
    imperialpage.bmiValue = 18;
    imperialpage.setBMIMessage();

    expect(imperialpage.bmiMessage).toEqual("Underweight")
  });

  it("should show Normal if bmiValue is between 18.5 and 25", () => {
    imperialpage.bmiValue = 23;
    imperialpage.setBMIMessage();

    expect(imperialpage.bmiMessage).toEqual("Normal")
  });

  it("should show Overweight if bmiValue is between 25 and 30", () => {
    imperialpage.bmiValue = 28;
    imperialpage.setBMIMessage();

    expect(imperialpage.bmiMessage).toEqual("Overweight")
  });

  it("should show Obese if bmiValue is above 30", () => {
    imperialpage.bmiValue = 33;
    imperialpage.setBMIMessage();

    expect(imperialpage.bmiMessage).toEqual("Obese")
  });

});