class Population
    describe Account do
    it 'confirms initial population 0' do
        population = Population.new
        expect(population.population_number).to eq 0
    end   
    it 'returns  current population' do
        population = subject.population
        expect(subject.current_population).to eq population
    end  
    it 'increases population' do
        subject.increase_population(50)
        expect(subject.current_population).to eq 50
    end        

end
