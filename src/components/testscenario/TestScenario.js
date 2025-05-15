class TestScenario {
  constructor(app_name, scenario_collection, data_id, description) {
    this.app_name = app_name;
    this.scenario_collection = scenario_collection;
    this.data_id = data_id;
    this.description = description;
  }

  toNestedObject() {
    return {
      [this.app_name]: {
        [this.scenario_collection]: [
          {
            data_id: this.data_id,
            desciption: this.description, // keep typo if needed
          },
        ],
      },
    };
  }
}
