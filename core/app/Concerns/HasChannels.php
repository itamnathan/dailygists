<?php

namespace App\Concerns;

use App\Models\Channel;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

trait HasChannels
{
    /**
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function channels()
    {
        return $this->channelsRelation;
    }

    /**
     * @param  \App\Models\Channel[]|int[]  $channels
     */
    public function syncChannels(array $channels)
    {
        $this->save();
        $this->channelsRelation()->sync($channels);

        $this->unsetRelation('channelsRelation');
    }

    public function removechannels()
    {
        $this->channelsRelation()->detach();

        $this->unsetRelation('channelsRelation');
    }

    public function channelsRelation(): MorphToMany
    {
        return $this->morphToMany(Channel::class, 'channelable')->withTimestamps();
    }
}
