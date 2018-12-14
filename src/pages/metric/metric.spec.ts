import { MetricPage } from "./metric";
import { TestBed, async } from "@angular/core/testing";
import { IonicModule, Platform, NavController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { PlatformMock, StatusBarMock, SplashScreenMock, NavControllerMock } from "ionic-mocks";

describe("MetricPage", () => {
  let metricpage, fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MetricPage
      ],
      imports: [IonicModule.forRoot(MetricPage)],
      providers: [
        { provide: Platform, useFactory: () => PlatformMock.instance() },
        { provide: StatusBar, useFactory: () => StatusBarMock.instance() },
        { provide: SplashScreen, useFactory: () => SplashScreenMock.instance() },
        { provide: NavController, useFactory: () => NavControllerMock.instance() }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricPage);
    metricpage = fixture.componentInstance;
  });

  it("should create the metric page", () => {
    expect(metricpage).toBeTruthy();
    expect(metricpage instanceof MetricPage).toEqual(true);
  });

  it("should calculate BMI", () => {
    metricpage.height = 160;
    metricpage.weight = 64;

    spyOn(metricpage, "setBMIMessage");
    metricpage.calculateBMI();
    expect(metricpage.setBMIMessage).toHaveBeenCalled;
    expect(metricpage.bmiValue).toEqual(25);
  });

  it("should show Underweight if bmiValue is under 18.5", () => {
    metricpage.bmiValue = 18;
    metricpage.setBMIMessage();

    expect(metricpage.bmiMessage).toEqual("Underweight")
  });

  it("should show Normal if bmiValue is between 18.5 and 25", () => {
    metricpage.bmiValue = 23;
    metricpage.setBMIMessage();

    expect(metricpage.bmiMessage).toEqual("Normal")
  });

  it("should show Overweight if bmiValue is between 25 and 30", () => {
    metricpage.bmiValue = 28;
    metricpage.setBMIMessage();

    expect(metricpage.bmiMessage).toEqual("Overweight")
  });

  it("should show Obese if bmiValue is above 30", () => {
    metricpage.bmiValue = 33;
    metricpage.setBMIMessage();

    expect(metricpage.bmiMessage).toEqual("Obese")
  });

});