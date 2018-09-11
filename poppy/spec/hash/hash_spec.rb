describe Hash do
    before do
        @grades = { "Jane Doe" => 10, "Jim Doe" => 6 }
    end
  
    it "should return a blank instance" do
        @newHash = Hash.new
        expect(@newHash).to eq({})
    end
  
    it "hash the correct information in a key" do
        expect(@grades["Jane Doe"]).to eq(10)
        expect(@grades["Jim Doe"]).to eq(6)
        expect(@grades["Not around"]).to eq(nil)
    end

  end